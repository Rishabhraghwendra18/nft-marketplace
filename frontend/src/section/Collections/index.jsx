import React from 'react';
import { AppCard } from '../../components';
import './index.css';

function Collections({collections}) {
  return (
    <div className='collections-root-div'>
        <div className="collections-content">
            <h1>You Collections</h1>
            <div className="collections-card">
                {collections.map((collection,index)=>(
                <AppCard key={index} image={collection.image} name={collection.name} description={collection.description}></AppCard>
                ))}
            </div>
        </div>
    </div>
  )
}

export default Collections;