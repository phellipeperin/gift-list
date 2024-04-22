

import store from '../store';
import {
  setSuccessMessage,
} from '../stores/feedbackStore';

function GiftListRoute() {
  store.dispatch(setSuccessMessage('Wahoooo!'));

  return <div>Gift List</div>;
}

export default GiftListRoute;
