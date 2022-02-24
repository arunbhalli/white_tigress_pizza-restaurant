import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import ListSubheader from '@mui/material/ListSubheader';

import menuitems from './menuData';

const MenuCard = () => {
  return (
    <div className="menu">
      <ImageList sx={{ width: '100%', height: '100%' }}>
        <ImageListItem key="Subheader" cols={2}>
          <ListSubheader component="div" className="menuheading">
            {' '}
            <h1>Foods Menu</h1>
          </ListSubheader>
        </ImageListItem>
        {menuitems.map(item => (
          <ImageListItem key={item.image} className="menu1">
            <img
              ui={false}
              src={`${item.image}?w=248&fit=crop&auto=format`}
              srcSet={`${item.image}?w=248&fit=crop&auto=format&dpr=2 2x`}
              alt={item.title}
              loading="lazy"
            />
            <ImageListItemBar
              sx={{
                background:
                  'linear-gradient(to bottom, rgba(0,0,0,0.7) 0%, ' +
                  'rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)',
              }}
              position="zIndex"
              title={item.title}
              subtitle={item.Ingredients}
            />
            <ImageListItemBar
              sx={{
                background:
                  'linear-gradient(to bottom, rgba(0,0,0,0.7) 0%, ' +
                  'rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)',
              }}
              title={item.size}
            />
          </ImageListItem>
        ))}
      </ImageList>
    </div>
  );
};

export default MenuCard;
