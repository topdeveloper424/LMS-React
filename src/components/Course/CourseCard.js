import React from "react";
// import { makeStyles } from '@material-ui/core/styles';
import withStyles from "@material-ui/core/styles/withStyles";

import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
// import Button from '@material-ui/core/Button';
import Typography from "@material-ui/core/Typography";
import { Grid } from "@material-ui/core";

import { Link } from "react-router-dom";
// import { connect } from 'react-redux'
// import { compose } from "redux";


const style = theme => ({
  card: {
    maxWidth: 345
  },
  media: {
    height: 140
  },
  gridCard: {
    // marginBottom: 30,
    [theme.breakpoints.down("sm")]: {
      display: "block"
    }
  },
  rootCard: {
    paddingLeft: 15,
    paddingRight: 15,
    width: 330,
    [theme.breakpoints.down("sm")]: {
      marginBottom: 20
    }
  }
});

class CourseCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { classes, course, universties } = this.props;

    return (
      <div>
          {
              universties&&universties.map((university, index) => {
                  return(
                        <Grid key={index} container className={classes.gridCard}>
                            {
                                university.id === course.university_id?
                                <Grid item xs className={classes.rootCard}>
                                    <Link
                                        to={{
                                            pathname: `/course/${course.id}`,
                                            state: {
                                            imgURL: course.logo_url
                                            }
                                        }}
                                        style={{textDecoration: 'none'}}
                                    >
                                    <Card className={classes.card}>
                                        <CardActionArea>
                                        <CardMedia
                                            className={classes.media}
                                            image={`${course.logo_url}`}
                                            title="Contemplative Reptile"
                                        />
                                        <CardContent>
                                            <Typography
                                            gutterBottom
                                            variant="h5"
                                            component="h2"
                                            style={{
                                                textAlign: "center",
                                                color: "#555555",
                                                fontSize: 12
                                            }}
                                            >
                                            {course.name}
                                            </Typography>
                                            <Typography
                                            gutterBottom
                                            variant="h5"
                                            component="h2"
                                            style={{
                                                textAlign: "center",
                                                color: "#555555",
                                                fontSize: 12
                                            }}
                                            >
                                            {course.description}
                                            </Typography>
                                            <Typography
                                            gutterBottom
                                            variant="h5"
                                            component="h2"
                                            style={{
                                                textAlign: "center",
                                                color: "#f9a021",
                                                fontSize: 12
                                            }}
                                            >
                                            <i className="fa fa-star" aria-hidden="true" />
                                            <i className="fa fa-star" aria-hidden="true" />
                                            <i className="fa fa-star" aria-hidden="true" />
                                            <i className="fa fa-star" aria-hidden="true" />
                                            <i className="fa fa-star" aria-hidden="true" />
                                            </Typography>
                                            <Typography
                                            gutterBottom
                                            variant="h5"
                                            component="h2"
                                            style={{
                                                textAlign: "center",
                                                color: "#555555",
                                                fontSize: 12
                                            }}
                                            >
                                            {course.updated_at}
                                            </Typography>
                                        </CardContent>
                                        </CardActionArea>
                                        <CardActions style={{direction: 'ltr', alignItems:'flex-end'}}>
                                            <Typography>
                                                <img
                                                style={{ width: 30, height: 26 }}
                                                alt="Img"
                                                src={university.logo_url}
                                                />
                                            </Typography>&nbsp;
                                            <Typography
                                                gutterBottom
                                                variant="h5"
                                                component="h2"
                                                style={{ color: "#555555", fontSize: 12 }}
                                            >
                                                {university.name}
                                            </Typography>
                                            <Typography
                                                gutterBottom
                                                variant="h5"
                                                component="h2"
                                                style={{
                                                    marginLeft: "auto",
                                                    color: "#6ac145",
                                                    fontSize: 12,
                                                }}
                                            >
                                                ريال{course.price}
                                            </Typography>
                                        </CardActions>
                                    </Card>
                                    </Link>
                                </Grid>:null
                            }
                        </Grid>
                    )
                })
          }
        </div>        
    );
  }
}

export default withStyles(style)(CourseCard);
// const mapStateToProps = state => {
//     const { universties } = state.universityReducer
//     console.log("universties", universties )
//     return {
//         universties
//     }
// }

// export default compose(withStyles(style), connect(mapStateToProps))(CourseCard)