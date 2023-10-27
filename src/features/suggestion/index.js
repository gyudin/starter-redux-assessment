import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  fetchSuggestion,
  selectError,
  selectLoading,
  selectSuggestion
  // Task 18: Import the `selectSuggestion()` selector from the suggestion slice
} from './suggestion.slice';
import './suggestion.css';

export default function Suggestion() {
  // Task 19: Call useSelector() with the selectSuggestion() selector
  // The component needs to access the `imageUrl` and `caption` properties of the suggestion object.
  const loading = useSelector(selectLoading);
  const error = useSelector(selectError);
  const suggestion = useSelector(selectSuggestion);
  const dispatch = useDispatch();

  console.log(suggestion);

  useEffect(() => {
    // Task 20: Dispatch the fetchSuggestion() action creator
    dispatch(fetchSuggestion());
  }, [dispatch]);

  let render;
  if (loading) {
    render = <h3>Loading...</h3>;
  } else if (error) {
    render = <h3>Sorry, we're having trouble loading the suggestion.</h3>;
  } else if (suggestion) {
    // Task 21: Enable the two JSX lines below needed to display the suggestion on the page
    render = (
      <>
        <img alt={suggestion.data.caption} src={suggestion.data.imageUrl} />
        <p>{suggestion.data.caption}</p>
      </>
    );
  } else {
    render = <h3>No suggestion available</h3>;
  }

  return (
    <section className="suggestion-container">
      <h2>Suggestion of the Day</h2>
      {render}
    </section>
  );
}
