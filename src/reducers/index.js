import {combineReducers} from 'redux'
import user from './user'
import movies from './movies'
import theatres from './theatres'
import movieHalls from './movieHalls'

export default combineReducers({
    user:user,
    movies:movies,
    theatres:theatres,
    movieHalls:movieHalls
})