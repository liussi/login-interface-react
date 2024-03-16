import { useSelector } from 'react-redux';
import {
  selectError,
  selectIsLoggedIn,
  selectIsRefreshing,
  selectUser,
  selectToken
} from '../redux/auth/selector';

export const useAuth = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const user = useSelector(selectUser);
  const isRefreshing = useSelector(selectIsRefreshing);
  const error = useSelector(selectError);
   const token = useSelector(selectToken);
  return {
    isRefreshing,
    isLoggedIn,
    user,
    error,
     token,
  };
};