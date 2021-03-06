/* eslint-disable import/prefer-default-export */
import * as React from 'react';

export function preLoad(list) {
  if (typeof window !== 'undefined') {
    // 图处预加载；
    const div = document.createElement('div');
    div.style.display = 'none';
    document.body.appendChild(div);
    list.forEach(src => {
      const img = new Image();
      img.src = src;
      div.appendChild(img);
    });
  }
}

export function useSiteData() {
  const [data, setData] = React.useState({});
  const [loading, setLoading] = React.useState(false);

  React.useEffect(() => {
    if (Object.keys(data).length === 0 && typeof fetch !== 'undefined') {
      setLoading(true);
      fetch(`https://render.alipay.com/p/h5data/antd4-config_website-h5data.json`)
        .then(res => res.json())
        .then(result => {
          setData(result);
          setLoading(false);
        });
    }
  }, []);

  return [data, loading];
}
