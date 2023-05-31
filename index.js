const videoList = [
    {
      title: 'Video 1',
      description: 'Funny Cats Video 1',
      videoId: 'VIDEO_ID_1'
    },
    {
      title: 'Video 2',
      description: 'Cute Funny Babys Video 2',
      videoId: 'VIDEO_ID_2'
    },
    {
      title: 'Video 3',
      description: 'OuterSpace Music Video 3',
      videoId: 'VIDEO_ID_3'
    }
  ];
  
  function loadVideo(videoId) {
    const videoPlayer = document.getElementById('videoPlayer');
    videoPlayer.innerHTML = `
      <iframe
        width="560"
        height="315"
        src="https://www.youtube.com/embed/${videoId}"
        frameborder="0"
        allow="autoplay; encrypted-media"
        allowfullscreen
      ></iframe>
    `;
  }
  
  function generateVideoList() {
    const videoListElement = document.getElementById('videoList');
    videoListElement.innerHTML = '';
  
    videoList.forEach((video) => {
      const videoElement = document.createElement('div');
      videoElement.classList.add('video');
  
      const thumbnail = document.createElement('img');
      thumbnail.src = `https://img.youtube.com/vi/${video.videoId}/0.jpg`;
      thumbnail.alt = video.title;
      thumbnail.addEventListener('click', () => {
        loadVideo(video.videoId);
      });
      videoElement.appendChild(thumbnail);
  
      const details = document.createElement('div');
      details.classList.add('details');
  
      const title = document.createElement('h2');
      title.textContent = video.title;
      title.addEventListener('click', () => {
        loadVideo(video.videoId);
      });
      details.appendChild(title);
  
      const description = document.createElement('p');
      description.textContent = video.description;
      details.appendChild(description);
  
      videoElement.appendChild(details);
  
      videoListElement.appendChild(videoElement);
    });
  }
  
  // Call the function to generate the video list
  generateVideoList();
  