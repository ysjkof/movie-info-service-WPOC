type Timer = number | undefined;
type Callback = () => void;

let timer: Timer = undefined;
let apiCallNumber = 0;

function debouunce(callback: Callback, { timeout = 500 }) {
  const timerHandler = () => {
    callback();
    apiCallNumber = apiCallNumber + 1;
    console.log("Api call number :", apiCallNumber);
  };

  if (timer) clearTimeout(timer);
  timer = setTimeout(timerHandler, timeout);
}

export default debouunce;
