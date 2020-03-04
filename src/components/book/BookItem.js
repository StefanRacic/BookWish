import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    width: 200,
    height: 200
  },
  title: {
    fontSize: 14
  },
  pos: {
    marginBottom: 12
  }
});

const BookItem = ({ book }) => {
  const classes = useStyles();

  return (
    <Card className="justify-content-center book-box" variant="outlined">
      <CardContent>
        <Typography
          className={classes.title}
          color="textSecondary"
          gutterBottom
        >
          Book ID: {book.id}
        </Typography>
        <Typography variant="h5" component="h2">
          {book.name}
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
          writer
        </Typography>
        <Typography variant="body2" component="p">
          well meaning and kindly.
          <br />
          {'"a benevolent smile"'}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Open</Button>
      </CardActions>
    </Card>
  );
};
export default BookItem;
