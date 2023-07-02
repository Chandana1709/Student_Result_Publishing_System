import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import InboxIcon from '@material-ui/icons/Inbox';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import NotificationsIcon from '@material-ui/icons/Notifications';

const useStyles = makeStyles((theme) => ({
  card: {
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.primary.contrastText,
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(2),
  },
  icon: {
    fontSize: 60,
    marginRight: theme.spacing(2),
  },
  count: {
    fontSize: 40,
    fontWeight: 'bold',
  },
  label: {
    fontSize: 16,
    marginTop: 10,
  },
}));

const Home = () => {
  const classes = useStyles();

  return (
    <Grid container spacing={3}>
      <Grid item xs={12} sm={6} md={4} lg={3}>
        <Card className={classes.card}>
          <CardContent>
            <InboxIcon className={classes.icon} />
            <div>
              <Typography variant="h1" component="h2" className={classes.count}>
                10
              </Typography>
              <Typography variant="subtitle1" component="p" className={classes.label}>
                Total Products
              </Typography>
            </div>
          </CardContent>
        </Card>
      </Grid>

      <Grid item xs={12} sm={6} md={4} lg={3}>
        <Card className={classes.card}>
          <CardContent>
            <ShoppingCartIcon className={classes.icon} />
            <div>
              <Typography variant="h1" component="h2" className={classes.count}>
                5
              </Typography>
              <Typography variant="subtitle1" component="p" className={classes.label}>
                Active Orders
              </Typography>
            </div>
          </CardContent>
        </Card>
      </Grid>

      <Grid item xs={12} sm={6} md={4} lg={3}>
        <Card className={classes.card}>
          <CardContent>
            <NotificationsIcon className={classes.icon} />
            <div>
              <Typography variant="h1" component="h2" className={classes.count}>
                3
              </Typography>
              <Typography variant="subtitle1" component="p" className={classes.label}>
                Notifications
              </Typography>
            </div>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
};

export default Home;
