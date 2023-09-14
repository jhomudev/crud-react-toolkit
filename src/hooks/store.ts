import { useDispatch, useSelector, TypedUseSelectorHook } from 'react-redux'
import { RootState, AppDispatch } from '../store/configureStore'

export const useAppSelector:TypedUseSelectorHook<RootState> = useSelector
export const useAppDispatch:() => AppDispatch = useDispatch
