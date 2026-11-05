import { MEDICAL_REVIEW_DATE, MEDICAL_REVIEW_DATE_LABEL, MEDICAL_REVIEWER_NAME } from "@/lib/medicalReview";

const MedicalReviewByline = () => (
  <p className="mt-3 text-sm text-[#64748b]">
    Reviewed by {MEDICAL_REVIEWER_NAME} · Reviewed on{" "}
    <time dateTime={MEDICAL_REVIEW_DATE}>{MEDICAL_REVIEW_DATE_LABEL}</time>
  </p>
);

export default MedicalReviewByline;
