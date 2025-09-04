// import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Paper from '@mui/material/Paper';
import { MOCK_ACTIONS } from '../components/list';


export default function ActionsList() {
  return (
    <Paper
      sx={{
        maxHeight: 440,
        mt: 2,
        overflow: "auto",
      }}
    >
      <List dense>
        {MOCK_ACTIONS.map((action) => (
          <ListItem
            key={action.id}
            divider
            sx={{
              py: 1,
              "&:hover": {
                backgroundColor: "action.hover",
              },
            }}
          >
            <ListItemText
              primary={action.name}
              secondary={action.description}
              slotProps={{
                primary: {
                  variant: "subtitle1",
                  fontWeight: "medium",
                },
                secondary: {
                  variant: "body2",
                },
              }}
            />
          </ListItem>
        ))}
      </List>
    </Paper>
  );
}
