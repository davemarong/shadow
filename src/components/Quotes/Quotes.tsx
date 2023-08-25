import { carl_jung_quotes } from "../../assets/constants/Quotes";

export const Quotes = () => {
  function generateNumberFromDate() {
    const currentDate = new Date();
    const dayOfMonth = currentDate.getDate();

    // Calculate the corresponding number in the range 1-17
    const numberInRange = ((dayOfMonth - 0) % carl_jung_quotes.length) + 1;

    return numberInRange;
  }

  const randomNumber = generateNumberFromDate();

  return (
    <div className="flex justify-center">
      <div className="card m-4 p-3 max-w-2xl">
        <p className="text-center text-sm">Quote of the day</p>
        <figure className="max-w-screen-md mx-auto text-center">
          <svg
            className="w-10 h-10 mx-auto mb-3 text-gray-400 dark:text-gray-600"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 18 14"
          >
            <path d="M6 0H2a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3H2a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Zm10 0h-4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3h-1a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Z" />
          </svg>
          <blockquote>
            <p className="text-2xl italic font-medium text-gray-900 dark:text-white">
              "{carl_jung_quotes[randomNumber]}."
            </p>
          </blockquote>
          <figcaption className="flex items-center justify-center mt-6 space-x-3">
            <img
              className="w-10 h-10 rounded-full"
              src="/carl-jung.png"
              alt="profile picture"
            />
            <div className="flex items-center divide-x-2 divide-gray-500 dark:divide-gray-700">
              <cite className="pr-3 font-medium text-gray-900 dark:text-white">
                Carl Gustav Jung
              </cite>
            </div>
          </figcaption>
        </figure>
      </div>
    </div>
  );
};
