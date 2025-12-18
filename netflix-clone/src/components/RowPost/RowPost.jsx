import React, { useEffect, useState } from 'react'
import "./RowPost.css"
import axios from "../../axios"
import {  API_KEY, imageUrl } from '../../constants/constants'
import YouTube from 'react-youtube'

function RowPost(props) {
  const [movies, setMovies] = useState([])
  const [urlid, setUrlid] = useState('')

  useEffect(() => {
    axios.get(props.url)
      .then(response => {
        setMovies(response.data.results)
      })
      .catch(() => {
        alert('network error')
      })
  }, [props.url])

  const opts = {
    height: '390',
    width: '100%',
    playerVars: { autoplay: 1 },
  }

  const handleMovie = id => {
    axios.get(`/movie/${id}/videos?api_key=${API_KEY}&language=en-US`)
      .then(response => {
        if (response.data.results.length !== 0) {
          setUrlid(response.data.results[0])
        }
      })
  }

  return (
    <div className="row">
      <h2>{props.title}</h2>

      <div className="posters">
        {movies
          .filter(obj => obj.backdrop_path)
          .map(obj => (
            <img
              key={obj.id}
              onClick={() => handleMovie(obj.id)}
              className={props.isSmall ? 'smallPoster' : 'poster'}
              src={`${imageUrl}${obj.backdrop_path}`}
              alt={obj.title || obj.name}
            />
          ))}
      </div>

      {urlid && <YouTube opts={opts} videoId={urlid.key} />}
    </div>
  )
}
export default RowPost;



