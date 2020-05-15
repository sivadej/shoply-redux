import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: { minWidth: 275 },
  title: { fontSize: 14 },
  pos: { marginBottom: 12 }
});

const ProductCard = ({product}) => {
  const {id, name, price, description} = product;
  const classes = useStyles();

  return (
    <div>
      <Card className={classes.root} variant='outlined'>
        <CardContent>
          <Typography variant='h5' component='h2'>
            {name}
          </Typography>
          <Typography>
            {description}
          </Typography>
          <Typography variant='h6'>
            {price}
          </Typography>
        </CardContent>
        <CardActions>
          <Button size='small' color='primary'>Add to Cart</Button>
        </CardActions>
      </Card>
    </div>
  )
}

export default ProductCard;