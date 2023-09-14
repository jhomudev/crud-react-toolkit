import { useDispatch, useSelector, TypedUseSelectorHook } from 'react-redux'
import { RootState, AppDispatch } from './../store/index'

export const useAppSelector:TypedUseSelectorHook<RootState> = useSelector
export const useAppDispatch:() => AppDispatch = useDispatch
