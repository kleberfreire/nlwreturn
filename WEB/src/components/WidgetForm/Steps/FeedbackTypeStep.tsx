import { FeedbackType, feedbackTypes } from "..";
import { CloseButton } from "../../CloseButton";

interface IFeedbackTypeStepProps {
  onFeedBackTypeChanged: (type: FeedbackType) => void;
}

export function FeedbackTypeStep({
  onFeedBackTypeChanged,
}: IFeedbackTypeStepProps) {
  return (
    <>
      <header>
        <span className="text-xl leading-6">Deixe seu feedback</span>

        <CloseButton />
      </header>
      <div className="flex py-8 gap-2 w-full flex-wrap">
        {Object.entries(feedbackTypes).map(([key, value]) => {
          return (
            <button
              className="bg-zinc-800 p-2 rounded-lg py-5 w-24 flex-1 flex flex-col items-center gap-2 border-2 border-transparent hover:border-brand-500 focus:border-brand-500 focus:outline-none scrollbar-thumb-zinc-700 scrollbar-track-transparent scrollbar-thin"
              onClick={() => onFeedBackTypeChanged(key as FeedbackType)}
              type="button"
              key={key + value.title}
            >
              <img src={value.image.source} alt={value.image.alt} />
              <span>{value.title}</span>
            </button>
          );
        })}
      </div>
    </>
  );
}
