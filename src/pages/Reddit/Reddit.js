import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default function Reddit() {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    axios
      .get('https://www.reddit.com/r/Coronavirus.json?raw_json=1')
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
        <div className="card mb-3" style={{ 'max-width': '540px' }} key={i}>
          <div className="row no-gutters">
            <div className="col-md-4">
              {<img src={img} className="card-img" alt="..." />}
            </div>
            <div className="col-md-8">
              <div className="card-body">
                <h5 className="card-title">
                  <a href={post.data.url} target="_blank">
                    {post.data.title}
                  </a>
                </h5>

                <p className="card-text">
                  <small className="text-muted">{post.data.created_utc}</small>
                </p>
              </div>
            </div>
          </div>
        </div>
      );
    }
  });

  return <div>{postCards}</div>;
}
