import { useState } from "react";

export const AgeCalculator = () => {
  const [dob, setDob] = useState("");
  const [result, setResult] = useState<{ years: number; months: number; days: number } | null>(null);

  const calculate = () => {
    if (!dob) return;
    const birth = new Date(dob);
    const now = new Date();
    let years = now.getFullYear() - birth.getFullYear();
    let months = now.getMonth() - birth.getMonth();
    let days = now.getDate() - birth.getDate();
    if (days < 0) { months--; days += new Date(now.getFullYear(), now.getMonth(), 0).getDate(); }
    if (months < 0) { years--; months += 12; }
    setResult({ years, months, days });
  };

  return (
    <div className="space-y-6">
      <div>
        <label className="text-sm font-medium text-foreground block mb-2">Date of Birth</label>
        <input type="date" value={dob} onChange={(e) => setDob(e.target.value)} className="w-full px-4 py-2.5 rounded-lg bg-secondary border-none text-sm outline-none focus:ring-2 focus:ring-ring/20" />
      </div>
      <button onClick={calculate} className="w-full py-2.5 bg-primary text-primary-foreground rounded-lg font-semibold text-sm hover:opacity-90 transition-opacity">Calculate Age</button>
      {result && (
        <div className="grid grid-cols-3 gap-4 pt-2">
          {[["Years", result.years], ["Months", result.months], ["Days", result.days]].map(([label, value]) => (
            <div key={String(label)} className="text-center p-4 bg-secondary rounded-xl">
              <div className="text-2xl font-bold text-primary">{String(value)}</div>
              <div className="text-xs text-muted-foreground mt-1">{String(label)}</div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export const EMICalculator = () => {
  const [principal, setPrincipal] = useState("1000000");
  const [rate, setRate] = useState("8.5");
  const [tenure, setTenure] = useState("20");

  const P = parseFloat(principal) || 0;
  const r = (parseFloat(rate) || 0) / 12 / 100;
  const n = (parseFloat(tenure) || 0) * 12;
  const emi = r > 0 && n > 0 ? (P * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1) : 0;
  const totalPayment = emi * n;
  const totalInterest = totalPayment - P;

  return (
    <div className="space-y-5">
      {[
        { label: "Loan Amount (₹)", value: principal, set: setPrincipal },
        { label: "Interest Rate (%)", value: rate, set: setRate },
        { label: "Tenure (Years)", value: tenure, set: setTenure },
      ].map(({ label, value, set }) => (
        <div key={label}>
          <label className="text-sm font-medium text-foreground block mb-2">{label}</label>
          <input type="number" value={value} onChange={(e) => set(e.target.value)} className="w-full px-4 py-2.5 rounded-lg bg-secondary border-none text-sm outline-none focus:ring-2 focus:ring-ring/20" />
        </div>
      ))}
      <div className="grid grid-cols-3 gap-4 pt-2">
        {[["Monthly EMI", emi], ["Total Interest", totalInterest], ["Total Payment", totalPayment]].map(([label, value]) => (
          <div key={String(label)} className="text-center p-4 bg-secondary rounded-xl">
            <div className="text-lg font-bold text-primary">₹{Math.round(value as number).toLocaleString()}</div>
            <div className="text-xs text-muted-foreground mt-1">{String(label)}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export const GSTCalculator = () => {
  const [amount, setAmount] = useState("1000");
  const [gstRate, setGstRate] = useState("18");
  const [inclusive, setInclusive] = useState(false);

  const amt = parseFloat(amount) || 0;
  const rate = parseFloat(gstRate) || 0;
  const gstAmount = inclusive ? amt - amt / (1 + rate / 100) : amt * (rate / 100);
  const basePrice = inclusive ? amt - gstAmount : amt;
  const total = inclusive ? amt : amt + gstAmount;

  return (
    <div className="space-y-5">
      <div>
        <label className="text-sm font-medium block mb-2">Amount (₹)</label>
        <input type="number" value={amount} onChange={(e) => setAmount(e.target.value)} className="w-full px-4 py-2.5 rounded-lg bg-secondary border-none text-sm outline-none focus:ring-2 focus:ring-ring/20" />
      </div>
      <div>
        <label className="text-sm font-medium block mb-2">GST Rate</label>
        <div className="grid grid-cols-4 gap-2">
          {["5", "12", "18", "28"].map((r) => (
            <button key={r} onClick={() => setGstRate(r)} className={`py-2 rounded-lg text-sm font-medium transition-colors ${gstRate === r ? "bg-primary text-primary-foreground" : "bg-secondary text-foreground hover:bg-accent"}`}>{r}%</button>
          ))}
        </div>
      </div>
      <label className="flex items-center gap-2 text-sm cursor-pointer">
        <input type="checkbox" checked={inclusive} onChange={(e) => setInclusive(e.target.checked)} className="rounded" />
        GST Inclusive
      </label>
      <div className="grid grid-cols-3 gap-4 pt-2">
        {[["Base Price", basePrice], ["GST Amount", gstAmount], ["Total", total]].map(([label, value]) => (
          <div key={String(label)} className="text-center p-4 bg-secondary rounded-xl">
            <div className="text-lg font-bold text-primary">₹{Math.round(value as number).toLocaleString()}</div>
            <div className="text-xs text-muted-foreground mt-1">{String(label)}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export const PercentageCalculator = () => {
  const [num, setNum] = useState("200");
  const [pct, setPct] = useState("15");
  const result = ((parseFloat(num) || 0) * (parseFloat(pct) || 0)) / 100;

  return (
    <div className="space-y-5">
      <div>
        <label className="text-sm font-medium block mb-2">Number</label>
        <input type="number" value={num} onChange={(e) => setNum(e.target.value)} className="w-full px-4 py-2.5 rounded-lg bg-secondary border-none text-sm outline-none focus:ring-2 focus:ring-ring/20" />
      </div>
      <div>
        <label className="text-sm font-medium block mb-2">Percentage (%)</label>
        <input type="number" value={pct} onChange={(e) => setPct(e.target.value)} className="w-full px-4 py-2.5 rounded-lg bg-secondary border-none text-sm outline-none focus:ring-2 focus:ring-ring/20" />
      </div>
      <div className="text-center p-6 bg-secondary rounded-xl">
        <div className="text-sm text-muted-foreground mb-1">{pct}% of {num} =</div>
        <div className="text-3xl font-bold text-primary">{result.toLocaleString(undefined, { maximumFractionDigits: 2 })}</div>
      </div>
    </div>
  );
};

export const BMICalculator = () => {
  const [weight, setWeight] = useState("70");
  const [height, setHeight] = useState("170");
  const w = parseFloat(weight) || 0;
  const h = (parseFloat(height) || 0) / 100;
  const bmi = h > 0 ? w / (h * h) : 0;
  const category = bmi < 18.5 ? "Underweight" : bmi < 25 ? "Normal" : bmi < 30 ? "Overweight" : "Obese";
  const catColor = bmi < 18.5 ? "text-yellow-600" : bmi < 25 ? "text-green-600" : bmi < 30 ? "text-orange-500" : "text-red-500";

  return (
    <div className="space-y-5">
      <div>
        <label className="text-sm font-medium block mb-2">Weight (kg)</label>
        <input type="number" value={weight} onChange={(e) => setWeight(e.target.value)} className="w-full px-4 py-2.5 rounded-lg bg-secondary border-none text-sm outline-none focus:ring-2 focus:ring-ring/20" />
      </div>
      <div>
        <label className="text-sm font-medium block mb-2">Height (cm)</label>
        <input type="number" value={height} onChange={(e) => setHeight(e.target.value)} className="w-full px-4 py-2.5 rounded-lg bg-secondary border-none text-sm outline-none focus:ring-2 focus:ring-ring/20" />
      </div>
      {h > 0 && (
        <div className="text-center p-6 bg-secondary rounded-xl">
          <div className="text-3xl font-bold text-primary">{bmi.toFixed(1)}</div>
          <div className={`text-sm font-semibold mt-1 ${catColor}`}>{category}</div>
        </div>
      )}
    </div>
  );
};

export const LoanCalculator = () => {
  const [amount, setAmount] = useState("500000");
  const [rate, setRate] = useState("10");
  const [years, setYears] = useState("5");
  const P = parseFloat(amount) || 0;
  const r = (parseFloat(rate) || 0) / 12 / 100;
  const n = (parseFloat(years) || 0) * 12;
  const monthly = r > 0 && n > 0 ? (P * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1) : 0;

  return (
    <div className="space-y-5">
      {[
        { label: "Loan Amount (₹)", value: amount, set: setAmount },
        { label: "Annual Rate (%)", value: rate, set: setRate },
        { label: "Years", value: years, set: setYears },
      ].map(({ label, value, set }) => (
        <div key={label}>
          <label className="text-sm font-medium block mb-2">{label}</label>
          <input type="number" value={value} onChange={(e) => set(e.target.value)} className="w-full px-4 py-2.5 rounded-lg bg-secondary border-none text-sm outline-none focus:ring-2 focus:ring-ring/20" />
        </div>
      ))}
      <div className="grid grid-cols-3 gap-4 pt-2">
        {[["Monthly", monthly], ["Total Interest", monthly * n - P], ["Total Payment", monthly * n]].map(([l, v]) => (
          <div key={String(l)} className="text-center p-4 bg-secondary rounded-xl">
            <div className="text-lg font-bold text-primary">₹{Math.round(v as number).toLocaleString()}</div>
            <div className="text-xs text-muted-foreground mt-1">{String(l)}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export const InterestCalculator = () => {
  const [principal, setPrincipal] = useState("100000");
  const [rate, setRate] = useState("8");
  const [years, setYears] = useState("5");
  const [compound, setCompound] = useState(true);
  const P = parseFloat(principal) || 0;
  const r = (parseFloat(rate) || 0) / 100;
  const t = parseFloat(years) || 0;
  const result = compound ? P * Math.pow(1 + r, t) : P * (1 + r * t);
  const interest = result - P;

  return (
    <div className="space-y-5">
      {[
        { label: "Principal (₹)", value: principal, set: setPrincipal },
        { label: "Rate (%)", value: rate, set: setRate },
        { label: "Years", value: years, set: setYears },
      ].map(({ label, value, set }) => (
        <div key={label}>
          <label className="text-sm font-medium block mb-2">{label}</label>
          <input type="number" value={value} onChange={(e) => set(e.target.value)} className="w-full px-4 py-2.5 rounded-lg bg-secondary border-none text-sm outline-none focus:ring-2 focus:ring-ring/20" />
        </div>
      ))}
      <div className="flex gap-3">
        {[true, false].map((c) => (
          <button key={String(c)} onClick={() => setCompound(c)} className={`flex-1 py-2 rounded-lg text-sm font-medium transition-colors ${compound === c ? "bg-primary text-primary-foreground" : "bg-secondary text-foreground"}`}>
            {c ? "Compound" : "Simple"}
          </button>
        ))}
      </div>
      <div className="grid grid-cols-2 gap-4">
        {[["Interest", interest], ["Total", result]].map(([l, v]) => (
          <div key={String(l)} className="text-center p-4 bg-secondary rounded-xl">
            <div className="text-lg font-bold text-primary">₹{Math.round(v as number).toLocaleString()}</div>
            <div className="text-xs text-muted-foreground mt-1">{String(l)}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export const SIPCalculator = () => {
  const [monthly, setMonthly] = useState("5000");
  const [rate, setRate] = useState("12");
  const [years, setYears] = useState("10");
  const P = parseFloat(monthly) || 0;
  const r = (parseFloat(rate) || 0) / 12 / 100;
  const n = (parseFloat(years) || 0) * 12;
  const fv = r > 0 ? P * ((Math.pow(1 + r, n) - 1) / r) * (1 + r) : P * n;
  const invested = P * n;

  return (
    <div className="space-y-5">
      {[
        { label: "Monthly Investment (₹)", value: monthly, set: setMonthly },
        { label: "Expected Return (%)", value: rate, set: setRate },
        { label: "Years", value: years, set: setYears },
      ].map(({ label, value, set }) => (
        <div key={label}>
          <label className="text-sm font-medium block mb-2">{label}</label>
          <input type="number" value={value} onChange={(e) => set(e.target.value)} className="w-full px-4 py-2.5 rounded-lg bg-secondary border-none text-sm outline-none focus:ring-2 focus:ring-ring/20" />
        </div>
      ))}
      <div className="grid grid-cols-3 gap-4 pt-2">
        {[["Invested", invested], ["Returns", fv - invested], ["Total Value", fv]].map(([l, v]) => (
          <div key={String(l)} className="text-center p-4 bg-secondary rounded-xl">
            <div className="text-lg font-bold text-primary">₹{Math.round(v as number).toLocaleString()}</div>
            <div className="text-xs text-muted-foreground mt-1">{String(l)}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export const DiscountCalculator = () => {
  const [price, setPrice] = useState("1000");
  const [discount, setDiscount] = useState("20");
  const p = parseFloat(price) || 0;
  const d = parseFloat(discount) || 0;
  const saved = p * d / 100;
  const final_ = p - saved;

  return (
    <div className="space-y-5">
      <div>
        <label className="text-sm font-medium block mb-2">Original Price (₹)</label>
        <input type="number" value={price} onChange={(e) => setPrice(e.target.value)} className="w-full px-4 py-2.5 rounded-lg bg-secondary border-none text-sm outline-none focus:ring-2 focus:ring-ring/20" />
      </div>
      <div>
        <label className="text-sm font-medium block mb-2">Discount (%)</label>
        <input type="number" value={discount} onChange={(e) => setDiscount(e.target.value)} className="w-full px-4 py-2.5 rounded-lg bg-secondary border-none text-sm outline-none focus:ring-2 focus:ring-ring/20" />
      </div>
      <div className="grid grid-cols-2 gap-4">
        <div className="text-center p-4 bg-secondary rounded-xl">
          <div className="text-lg font-bold text-green-600">₹{Math.round(saved).toLocaleString()}</div>
          <div className="text-xs text-muted-foreground mt-1">You Save</div>
        </div>
        <div className="text-center p-4 bg-secondary rounded-xl">
          <div className="text-lg font-bold text-primary">₹{Math.round(final_).toLocaleString()}</div>
          <div className="text-xs text-muted-foreground mt-1">Final Price</div>
        </div>
      </div>
    </div>
  );
};
