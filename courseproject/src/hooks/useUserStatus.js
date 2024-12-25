import { onAuthStateChanged, getAuth } from 'firebase/auth'
import { useDispatch, useSelector } from 'react-redux'
import firebaseApp from '../firebase.js'
import { useEffect } from 'react'
import { setUser, removeUser } from '../store/slices/userSlice.js'
import { fetchUserProducts } from '../store/slices/productSlice.js'

export const useUserStatus = () => {
  const dispatch = useDispatch()
  const userId = useSelector(state => state.user.id) 

  const authStateChanged = (user) => {
    if (user) {
      dispatch(setUser({
        email: user.email,
        token: user.accessToken,
        id: user.uid,
      }))
    } else {
      dispatch(removeUser())
    }
  }

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(getAuth(firebaseApp), authStateChanged)
    return unsubscribe
  }, [dispatch])

  useEffect(() => {
    if (userId) {
      dispatch(fetchUserProducts({ userId }))
    }
  }, [dispatch, userId]) 
}
