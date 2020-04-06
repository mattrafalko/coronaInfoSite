import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Moment from 'react-moment';
import 'moment-timezone';
import Banner from '../../assets/covidbanner.jpg';

export default function Reddit() {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    axios
      .get('https://www.reddit.com/r/Coronavirus/top.json?raw_json=1')
      .then((res) => {
        setPosts(res.data.data.children);
      })
      .catch((e) => console.log(e));
  }, []);

  const postCards = posts.map((post, i) => {
    if (
      post.data.author !== 'AutoModerator' &&
      !post.data.is_original_content &&
      !post.data.stickied
    ) {
      let img;
      try {
        img = post.data.preview.images[0].resolutions[4].url;
      } catch (e) {}

      return (
        <div className="card mt-4 shadow">
          <img
            src={img ? img : Banner}
            className="card-img-top"
            alt={`${post.data.title}_banner`}
          />

          <div className="card-body">
            <h5 className="card-title">
              <a href={post.data.url} target="_blank" className="text-danger">
                {' '}
                {post.data.title}
              </a>
            </h5>
            <span className="text-secondary">
              <Moment format="MM/DD/YYYY hh:mm:ss A" unix>
                {post.data.created}
              </Moment>
            </span>
          </div>
        </div>
      );
    }
  });

  return <div>{postCards}</div>;
}
