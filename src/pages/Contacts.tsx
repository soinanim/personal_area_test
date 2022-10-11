import React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import DeleteIcon from '@mui/icons-material/Delete';
import IconButton from '@mui/material/IconButton';
import { Box, Button } from '@mui/material';

import { deepOrange, deepPurple, indigo } from '@mui/material/colors';

const Contacts = () => {
  return (
    <Box
      sx={{
        mt: 15.5,
        p: 1.5,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        borderRadius: '5px',
        boxShadow: 1,
        width: 420,
      }}>
      <Typography sx={{ mt: 4, mb: 2, pl: 2 }} variant='h6' component='div'>
        List of Contacts
      </Typography>
      <List sx={{ width: '100%', maxWidth: 560, mb: 2 }}>
        <ListItem
          secondaryAction={
            <IconButton edge='end' aria-label='delete'>
              <DeleteIcon />
            </IconButton>
          }
          alignItems='flex-start'>
          <ListItemAvatar>
            <Avatar sx={{ bgcolor: deepOrange[500] }}>RS</Avatar>
          </ListItemAvatar>
          <ListItemText primary='Remy Sharp' secondary={'+2(8334)643-84-87'} />
        </ListItem>
        <Divider variant='inset' component='li' />
        <ListItem
          alignItems='flex-start'
          secondaryAction={
            <IconButton edge='end' aria-label='delete'>
              <DeleteIcon />
            </IconButton>
          }>
          <ListItemAvatar>
            <Avatar sx={{ bgcolor: deepPurple[500] }}>TH</Avatar>
          </ListItemAvatar>
          <ListItemText
            primary='Travis Howard'
            secondary={'+3(4323)754-43-65'}
          />
        </ListItem>
        <Divider variant='inset' component='li' />
        <ListItem
          alignItems='flex-start'
          secondaryAction={
            <IconButton edge='end' aria-label='delete'>
              <DeleteIcon />
            </IconButton>
          }>
          <ListItemAvatar>
            <Avatar sx={{ bgcolor: indigo[500] }}>CB</Avatar>
          </ListItemAvatar>
          <ListItemText primary='Cindy Baker' secondary={'+8(3468)564-65-58'} />
        </ListItem>
      </List>
      <Button variant='contained'>Add Contact</Button>
    </Box>
  );
};

export default Contacts;
