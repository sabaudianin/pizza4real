import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faComment } from "@fortawesome/free-regular-svg-icons";

type TestimonialProp = {
  text: string;
  author: string;
};
export const TestimonialCard: React.FC<TestimonialProp> = ({
  text,
  author,
}) => {
  return (
    <article className="p-2">
      <div className="bg-[var(--accent)]/50  transition duration-200 hover:scale-105 shadow-xl shadow rounded-xl p-4 ">
        <FontAwesomeIcon
          icon={faComment}
          className="text-2xl p-2 text-[var(--medium)]"
        />
        <h3 className="font-bold">{author}</h3>
        <h4 className="text-[var(--medium)] font-medium text-sm">
          &quot; {text} &quot;
        </h4>
      </div>
    </article>
  );
};
