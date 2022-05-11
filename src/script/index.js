

async function getUsers() {
    try {
      const response = await fetch('http://localhost:3200/likes', {
        mode: 'cors',
        credentials: 'include',
        method: 'GET',
        headers: {
          accept: 'application/json',
        },
      });
  
      if (!response.ok) {
        throw new Error(`Error! status: ${response.status}`);
      }
  
      const result = await response.json();
      return result.data;
    } catch (err) {
      console.log(err);
    }
  }
  
  
async function renderUsers() {
    let likes = await getUsers();
    let html = '';
    likes.forEach(like => {
        let htmlSegment = `<div class="user">
                            
                            <h2>${like.likes_received} </h2>
                            <div class="email"><a href="/">${like.user.username}</a></div>
                        </div>`;

        html += htmlSegment;
    });

    let container = document.querySelector('.container');
    container.innerHTML = html;
}

renderUsers();