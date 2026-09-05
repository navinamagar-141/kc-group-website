"use client";

import { FormEvent, useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import Button from "@/components/ui/button";
import { quoteServiceOptions, serviceAreas } from "@/lib/site-config";

type ServiceType = (typeof quoteServiceOptions.serviceType)[number];
type JobType = (typeof quoteServiceOptions.jobType)[number];
type Status = "idle" | "submitting" | "error";

const TOTAL_STEPS = 4;

export default function QuoteForm() {
  const router = useRouter();
  const [step, setStep] = useState(1);
  const [status, setStatus] = useState<Status>("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const [serviceType, setServiceType] = useState<ServiceType | "">("");
  const [commercialCategory, setCommercialCategory] = useState("");
  const [jobType, setJobType] = useState<JobType | "">("");
  const [serviceCategory, setServiceCategory] = useState("");

  const categoryOptions = useMemo(() => {
    if (serviceType === "Cleaning") return quoteServiceOptions.cleaningCategory;
    if (serviceType === "Removals") return quoteServiceOptions.removalCategory;
    return [];
  }, [serviceType]);

  function canAdvance() {
    if (step === 1) return Boolean(serviceType);
    if (step === 2) {
      if (serviceType === "Commercial") return Boolean(commercialCategory);
      return Boolean(jobType);
    }
    return true;
  }

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");
    setErrorMessage("");

    const form = e.currentTarget;
    const formData = new FormData(form);

    if (formData.get("website")) {
      router.push("/thank-you");
      return;
    }

    try {
      const res = await fetch("/api/quote", { method: "POST", body: formData });

      if (!res.ok) {
        const data = await res.json().catch(() => null);
        throw new Error(data?.error || "Something went wrong. Please try again.");
      }

      router.push("/thank-you");
    } catch (err) {
      setStatus("error");
      setErrorMessage(err instanceof Error ? err.message : "Something went wrong. Please try again.");
    }
  }

  return (
    <div className="rounded-2xl border border-ink/10 bg-white p-6 sm:p-10">
      <div className="flex items-center gap-2 mb-8" role="progressbar" aria-valuenow={step} aria-valuemin={1} aria-valuemax={TOTAL_STEPS}>
        {Array.from({ length: TOTAL_STEPS }).map((_, i) => (
          <span key={i} className={`h-1.5 flex-1 rounded-full ${i < step ? "bg-gold" : "bg-ink/10"}`} />
        ))}
      </div>

      <form onSubmit={handleSubmit} className="flex flex-col gap-6">
        <input type="text" name="website" tabIndex={-1} autoComplete="off" className="hidden" aria-hidden="true" />

        {/* STEP 1 */}
        <fieldset className={step === 1 ? "flex flex-col gap-4" : "hidden"}>
          <legend className="font-display text-xl font-semibold text-ink mb-2">What service do you need?</legend>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            {quoteServiceOptions.serviceType.map((type) => (
              <label
                key={type}
                className={`cursor-pointer rounded-xl border p-5 text-center font-medium transition-colors ${
                  serviceType === type ? "border-gold bg-gold/10 text-ink" : "border-ink/12 text-ink/70 hover:border-ink/30"
                }`}
              >
                <input type="radio" name="serviceType" value={type} checked={serviceType === type} onChange={() => setServiceType(type)} className="sr-only" />
                {type}
              </label>
            ))}
          </div>
        </fieldset>

        {/* STEP 2 */}
        <fieldset className={step === 2 ? "flex flex-col gap-4" : "hidden"}>
          {serviceType === "Commercial" ? (
            <>
              <legend className="font-display text-xl font-semibold text-ink mb-2">Commercial cleaning or commercial removals?</legend>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {quoteServiceOptions.commercialCategory.map((type) => (
                  <label
                    key={type}
                    className={`cursor-pointer rounded-xl border p-5 text-center font-medium transition-colors ${
                      commercialCategory === type ? "border-gold bg-gold/10 text-ink" : "border-ink/12 text-ink/70 hover:border-ink/30"
                    }`}
                  >
                    <input type="radio" name="commercialCategory" value={type} checked={commercialCategory === type} onChange={() => setCommercialCategory(type)} className="sr-only" />
                    {type}
                  </label>
                ))}
              </div>
            </>
          ) : (
            <>
              <legend className="font-display text-xl font-semibold text-ink mb-2">Residential or commercial?</legend>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {quoteServiceOptions.jobType.map((type) => (
                  <label
                    key={type}
                    className={`cursor-pointer rounded-xl border p-5 text-center font-medium transition-colors ${
                      jobType === type ? "border-gold bg-gold/10 text-ink" : "border-ink/12 text-ink/70 hover:border-ink/30"
                    }`}
                  >
                    <input type="radio" name="jobType" value={type} checked={jobType === type} onChange={() => setJobType(type)} className="sr-only" />
                    {type}
                  </label>
                ))}
              </div>
              {categoryOptions.length > 0 ? (
                <div className="pt-2">
                  <label className="block text-sm font-medium text-ink/70 mb-2" htmlFor="serviceCategory">
                    Which service best matches your job? (optional)
                  </label>
                  <select
                    id="serviceCategory"
                    name="serviceCategory"
                    value={serviceCategory}
                    onChange={(e) => setServiceCategory(e.target.value)}
                    className="w-full rounded-lg border border-ink/15 px-4 py-3 text-sm text-ink focus:border-gold focus:outline-none"
                  >
                    <option value="">Not sure / other</option>
                    {categoryOptions.map((opt) => (
                      <option key={opt} value={opt}>{opt}</option>
                    ))}
                  </select>
                </div>
              ) : null}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div>
                  <label className="block text-sm font-medium text-ink/70 mb-2" htmlFor="frequency">One-off or ongoing?</label>
                  <select id="frequency" name="frequency" className="w-full rounded-lg border border-ink/15 px-4 py-3 text-sm text-ink focus:border-gold focus:outline-none" defaultValue="">
                    <option value="" disabled>Select an option</option>
                    {quoteServiceOptions.frequency.map((opt) => (
                      <option key={opt} value={opt}>{opt}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-ink/70 mb-2" htmlFor="propertySize">Approximate size</label>
                  <select id="propertySize" name="propertySize" className="w-full rounded-lg border border-ink/15 px-4 py-3 text-sm text-ink focus:border-gold focus:outline-none" defaultValue="">
                    <option value="" disabled>Select an option</option>
                    {quoteServiceOptions.propertySize.map((opt) => (
                      <option key={opt} value={opt}>{opt}</option>
                    ))}
                  </select>
                </div>
              </div>
            </>
          )}
        </fieldset>

        {/* STEP 3 */}
        <fieldset className={step === 3 ? "grid grid-cols-1 sm:grid-cols-2 gap-4" : "hidden"}>
          <legend className="font-display text-xl font-semibold text-ink mb-2 sm:col-span-2">Tell us about the job</legend>
          <Field label="Suburb" name="suburb" required={step === 3} />
          <div>
            <label className="block text-sm font-medium text-ink/70 mb-2" htmlFor="state">State</label>
            <select id="state" name="state" className="w-full rounded-lg border border-ink/15 px-4 py-3 text-sm text-ink focus:border-gold focus:outline-none" defaultValue="">
              <option value="" disabled>Select state</option>
              {serviceAreas.map((area) => (
                <option key={area.abbr} value={area.abbr}>{area.name}</option>
              ))}
            </select>
          </div>
          <Field label="Postcode" name="postcode" />
          <Field label="Preferred date" name="preferredDate" type="date" />
          <div className="sm:col-span-2">
            <label className="block text-sm font-medium text-ink/70 mb-2" htmlFor="jobDetails">Job details</label>
            <textarea
              id="jobDetails"
              name="jobDetails"
              rows={4}
              className="w-full rounded-lg border border-ink/15 px-4 py-3 text-sm text-ink focus:border-gold focus:outline-none"
              placeholder="Tell us a bit about the property or job — size, access, timing, anything useful."
            />
          </div>
          <div className="sm:col-span-2">
            <label className="block text-sm font-medium text-ink/70 mb-2" htmlFor="fileUpload">Photos (optional)</label>
            <input
              id="fileUpload"
              name="fileUpload"
              type="file"
              accept="image/*"
              multiple
              className="w-full text-sm text-ink/60 file:mr-4 file:rounded-full file:border-0 file:bg-gold/12 file:px-4 file:py-2 file:text-sm file:font-semibold file:text-ink"
            />
          </div>
        </fieldset>

        {/* STEP 4 */}
        <fieldset className={step === 4 ? "grid grid-cols-1 sm:grid-cols-2 gap-4" : "hidden"}>
          <legend className="font-display text-xl font-semibold text-ink mb-2 sm:col-span-2">Your contact details</legend>
          <Field label="Full name" name="fullName" required={step === 4} />
          <Field label="Phone number" name="phone" type="tel" required={step === 4} />
          <Field label="Email address" name="email" type="email" required={step === 4} className="sm:col-span-2" />
          <div className="sm:col-span-2">
            <span className="block text-sm font-medium text-ink/70 mb-2">Preferred contact method</span>
            <div className="flex flex-wrap gap-3">
              {quoteServiceOptions.contactMethod.map((method) => (
                <label key={method} className="flex items-center gap-2 rounded-lg border border-ink/15 px-4 py-2.5 text-sm text-ink/70 has-[:checked]:border-gold has-[:checked]:text-ink cursor-pointer">
                  <input type="radio" name="preferredContact" value={method} defaultChecked={method === "Phone"} />
                  {method}
                </label>
              ))}
            </div>
          </div>
        </fieldset>

        {errorMessage ? <p className="text-sm text-red-600">{errorMessage}</p> : null}

        <div className="flex items-center justify-between pt-2">
          {step > 1 ? (
            <Button type="button" variant="outline-dark" onClick={() => setStep((s) => Math.max(1, s - 1))}>Back</Button>
          ) : (
            <span />
          )}

          {step < TOTAL_STEPS ? (
            <Button type="button" variant="gold" onClick={() => canAdvance() && setStep((s) => Math.min(TOTAL_STEPS, s + 1))}>
              Continue
            </Button>
          ) : (
            <Button type="submit" variant="gold" disabled={status === "submitting"}>
              {status === "submitting" ? "Sending…" : "Get My Free Quote"}
            </Button>
          )}
        </div>
      </form>
    </div>
  );
}

function Field({
  label,
  name,
  type = "text",
  required = false,
  className = "",
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  className?: string;
}) {
  return (
    <div className={className}>
      <label className="block text-sm font-medium text-ink/70 mb-2" htmlFor={name}>
        {label}
        {required ? <span className="text-gold"> *</span> : null}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        className="w-full rounded-lg border border-ink/15 px-4 py-3 text-sm text-ink focus:border-gold focus:outline-none"
      />
    </div>
  );
}
