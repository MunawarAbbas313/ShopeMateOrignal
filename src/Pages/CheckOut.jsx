import { useMemo, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { clearCart } from "../Redux/CartSlice";
import {
  FaCreditCard,
  FaUniversity,
  FaMoneyBillWave,
  FaShieldAlt,
} from "react-icons/fa";

function CheckOut() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // Redux state
  const { items, totalPrice, totalQuantity } = useSelector((s) => s.cart);
  const user = useSelector((s) => s.auth.user); // null or { uid, email }

  // Default: Credit card selected
  const [paymentMethod, setPaymentMethod] = useState("card");
  const [emiMonths, setEmiMonths] = useState(6);

  // Simple card form state
  const [card, setCard] = useState({
    number: "",
    name: "",
    expiry: "",
    cvv: "",
    city: "",
    state: "",
    zip: "",
  });

  // Normalize numeric price in case product price is string
  const lineItems = useMemo(
    () =>
      items.map((it) => {
        const price = typeof it.price === "string" ? Number(it.price.replace(/[^0-9.]/g, "")) : Number(it.price || 0);
        return { ...it, price, subtotal: price * (it.quantity || 1) };
      }),
    [items]
  );

  const safeTotal = useMemo(
    () => lineItems.reduce((sum, it) => sum + it.subtotal, 0),
    [lineItems]
  );

  const shipping = safeTotal > 0 ? 5 : 0; // example flat shipping
  const grandTotal = safeTotal + shipping;

  const monthly = useMemo(() => {
    if (!emiMonths || emiMonths <= 0) return 0;
    return grandTotal / emiMonths;
  }, [grandTotal, emiMonths]);

  const onPlaceOrder = () => {
    if (!items.length) {
      toast.info("Your cart is empty.");
      return;
    }

    if (!user) {
      toast.info("Please login to continue checkout.");
      navigate("/login");
      return;
    }

    if (paymentMethod === "card") {
      // very basic client-side validation
      const digits = card.number.replace(/\s+/g, "");
      const expiryOk = /^\d{2}\/\d{2}$/.test(card.expiry);
      if (digits.length < 12) {
        toast.error("Please enter a valid card number.");
        return;
      }
      if (!expiryOk) {
        toast.error("Expiry must be in MM/YY.");
        return;
      }
      if (card.cvv.length < 3) {
        toast.error("CVV must be at least 3 digits.");
        return;
      }
      if (!card.name || !card.city || !card.state || !card.zip) {
        toast.error("Please complete billing address.");
        return;
      }
    }

    // Simulate success
    toast.success("Order placed successfully 🎉");
    dispatch(clearCart());
    navigate("/");
  };

  return (
    <div className="min-h-screen  py-10 px-4 sm:px-6 lg:px-8">
      {/* EMI banner */}
      <div className="max-w-6xl mx-auto mb-6">
        <div className="flex items-center justify-between gap-4 bg-gradient-to-r bg-gray-700 text-white rounded-2xl px-5 py-4 shadow-lg">
          <div className="font-semibold">
            EMI available — as low as{" "}
            <span className="underline">
              ${monthly.toFixed(2)}/mo
            </span>{" "}
            for {emiMonths} months
          </div>
          <div className="flex items-center gap-2">
            <span className="text-lg opacity-90">Change tenure:</span>
            <select
              className="rounded-lg px-2 py-1 text-white text-xl bg-gray-700"
              value={emiMonths}
              onChange={(e) => setEmiMonths(Number(e.target.value))}
            >
              <option value={3}>3 months</option>
              <option value={6}>6 months</option>
              <option value={9}>9 months</option>
              <option value={12}>12 months</option>
            </select>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-5 gap-6">
        {/* Left: Cart list */}
        <section className="lg:col-span-3  rounded-2xl shadow-xl p-5">
          <h2 className="text-xl sm:text-2xl font-extrabold mb-4 flex items-center justify-between">
            <span>🛒 Your Cart</span>
            <span className="text-sm font-semibold">
              {totalQuantity} item{totalQuantity !== 1 ? "s" : ""}
            </span>
          </h2>

          {lineItems.length === 0 ? (
            <div className="p-6 text-center">
              Your cart is empty.
            </div>
          ) : (
            <ul className="space-y-4">
              {lineItems.map((it) => (
                <li
                  key={it.id ?? `${it.title}-${it.img}`}
                  className="flex gap-4 items-center border rounded-xl p-4 hover:shadow-md transition"
                >
                  {/* thumb */}
                  <div className="w-20 h-20 sm:w-24 sm:h-24 border rounded-xl overflow-hidden bg-white">
                    <img
                      src={it.img}
                      alt={it.title}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  {/* content */}
                  <div className="flex-1 min-w-0">
                    <h3 className="font-semibold truncate">{it.title}</h3>
                    <div className="text-sm">
                      Qty: {it.quantity}
                    </div>
                    <div className="mt-1 font-bold">
                      ${it.subtotal.toFixed(2)}
                    </div>
                  </div>

                  {/* price bubble */}
                  <div className="hidden sm:flex flex-col items-end">
                    <span className="text-xs">
                      Unit
                    </span>
                    <span className="font-semibold">
                      ${it.price.toFixed(2)}
                    </span>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </section>

        {/* Right: Payment + Summary */}
        <aside className="lg:col-span-2 space-y-6">
          {/* Payment */}
          <div className=" rounded-2xl shadow-xl p-5">
            <h3 className="text-xl font-extrabold mb-4">Payment Method</h3>

            <div className="space-y-3">
              {/* Card */}
              <label className={`flex items-center gap-3 p-3 border rounded-xl cursor-pointer ${paymentMethod === "card" ? "ring-2 ring-blue-500" : ""}`}>
                <input
                  type="radio"
                  name="payment"
                  value="card"
                  checked={paymentMethod === "card"}
                  onChange={() => setPaymentMethod("card")}
                />
                <FaCreditCard className="shrink-0" />
                <span className="font-medium">Credit / Debit Card</span>
              </label>

              {/* Bank */}
              <label className={`flex items-center gap-3 p-3 border rounded-xl cursor-pointer ${paymentMethod === "bank" ? "ring-2 ring-blue-500" : ""}`}>
                <input
                  type="radio"
                  name="payment"
                  value="bank"
                  checked={paymentMethod === "bank"}
                  onChange={() => setPaymentMethod("bank")}
                />
                <FaUniversity className="shrink-0" />
                <span className="font-medium">Bank Transfer</span>
              </label>

              {/* COD */}
              <label className={`flex items-center gap-3 p-3 border rounded-xl cursor-pointer ${paymentMethod === "cod" ? "ring-2 ring-blue-500" : ""}`}>
                <input
                  type="radio"
                  name="payment"
                  value="cod"
                  checked={paymentMethod === "cod"}
                  onChange={() => setPaymentMethod("cod")}
                />
                <FaMoneyBillWave className="shrink-0" />
                <span className="font-medium">Cash on Delivery</span>
              </label>
            </div>

            {/* Card form */}
            {paymentMethod === "card" && (
              <div className="mt-5 space-y-3 animate-[fadeIn_.2s_ease-in]">
                <div className="flex items-center gap-2 text-lg">
                  <FaShieldAlt />
                  <span>256-bit SSL secured payment</span>
                </div>

                <input
                  type="text"
                  placeholder="Card Number"
                  value={card.number}
                  onChange={(e) =>
                    setCard((c) => ({ ...c, number: e.target.value }))
                  }
                  className="w-full p-3 border rounded-xl outline-none"
                />
                <div className="grid grid-cols-2 gap-3">
                  <input
                    type="text"
                    placeholder="Expiry (MM/YY)"
                    value={card.expiry}
                    onChange={(e) =>
                      setCard((c) => ({ ...c, expiry: e.target.value }))
                    }
                    className="p-3 border rounded-xl outline-none"
                  />
                  <input
                    type="password"
                    placeholder="CVV"
                    value={card.cvv}
                    onChange={(e) =>
                      setCard((c) => ({ ...c, cvv: e.target.value }))
                    }
                    className="p-3 border rounded-xl outline-none"
                  />
                </div>
                <input
                  type="text"
                  placeholder="Name on Card"
                  value={card.name}
                  onChange={(e) =>
                    setCard((c) => ({ ...c, name: e.target.value }))
                  }
                  className="w-full p-3 border rounded-xl outline-none"
                />

                <div className="grid grid-cols-2 gap-3">
                  <input
                    type="text"
                    placeholder="City"
                    value={card.city}
                    onChange={(e) =>
                      setCard((c) => ({ ...c, city: e.target.value }))
                    }
                    className="p-3 border rounded-xl outline-none"
                  />
                  <input
                    type="text"
                    placeholder="State/Province"
                    value={card.state}
                    onChange={(e) =>
                      setCard((c) => ({ ...c, state: e.target.value }))
                    }
                    className="p-3 border rounded-xl outline-none"
                  />
                </div>
                <input
                  type="text"
                  placeholder="ZIP / Postal Code"
                  value={card.zip}
                  onChange={(e) =>
                    setCard((c) => ({ ...c, zip: e.target.value }))
                  }
                  className="w-full p-3 border rounded-xl outline-none"
                />

                {/* EMI readout (based on selection above) */}
                <div className="mt-2 text-sm">
                  EMI: <span className="font-semibold">${monthly.toFixed(2)}</span>/mo for{" "}
                  <span className="font-semibold">{emiMonths}</span> months
                </div>
              </div>
            )}

            {paymentMethod === "bank" && (
              <div className="mt-4 text-sm">
                We’ll show bank account details after you place the order.
              </div>
            )}

            {paymentMethod === "cod" && (
              <div className="mt-4 text-sm">
                Pay cash to the courier at delivery. Extra verification may apply.
              </div>
            )}
          </div>

          {/* Summary + CTA */}
          <div className=" rounded-2xl shadow-xl p-5">
            <h3 className="text-xl font-extrabold mb-4">Order Summary</h3>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span>Items Total</span>
                <span>${safeTotal.toFixed(2)}</span>
              </div>
              <div className="flex justify-between">
                <span>Shipping</span>
                <span>${shipping.toFixed(2)}</span>
              </div>
              <div className="flex justify-between font-bold text-lg border-t pt-2">
                <span>Grand Total</span>
                <span>${grandTotal.toFixed(2)}</span>
              </div>
            </div>

            <button
              onClick={onPlaceOrder}
              disabled={!items.length}
              className="w-full mt-5 py-3 rounded-2xl font-semibold text-white bg-green-600 hover:bg-green-700 disabled:bg-gray-400 disabled:cursor-not-allowed transition cursor-pointer"
            >
              Place Order ({totalQuantity} item{totalQuantity !== 1 ? "s" : ""} • ${grandTotal.toFixed(2)})
            </button>

            <p className="mt-2 text-xs text-center">
              By placing the order you agree to our Terms & Privacy Policy.
            </p>
          </div>
        </aside>
      </div>
    </div>
  );
}

export default CheckOut;
