import React from 'react'

const Projectshowcase = () => {
    const projects = [
        // Each project object should contain title, image URL, and website URL
        {
            id:1,
          title: 'Project 1',
          imageUrl: '/project1.png',
          websiteUrl: 'https://project1.com',
        },
        // Add more projects
      ];
  return (
    <div className="carousel carousel-center max-w-md p-4 space-x-4 bg-neutral rounded-box">
        {projects.map(()=>(

    <div className="carousel-item" key={projects.id}>
      <img src={projects.imageUrl} className="rounded-box" />
    </div> 
        ))}
    </div>
  )
}

export default Projectshowcase
