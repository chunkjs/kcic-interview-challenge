import { useUserService } from '../../user-context';
/**
 * This component could be repurpose for reusability purposes
 * The prop can be standarized and make it reusabe throughout the app
 *
 * For the sake of time we are handling local state and directly injecting global context state however this could be 100% stateless
 */
function Dropdown() {
  const { state: { userList }, dispatch } = useUserService();
  return (
    <select onChange={({ target: { value } }) => dispatch({ type: 'updateCurrentUser', value })}>
      {userList.map(({ id, username }) => <option key={id} value={id}>{username}</option>)}
    </select>
  );
}

export default Dropdown;
