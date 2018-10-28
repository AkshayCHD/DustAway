import React from "react";
import Drawer from "@material-ui/core/Drawer";
import Divider from "@material-ui/core/Divider";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Avatar from "@material-ui/core/Avatar";
import { withRouter } from "react-router-dom";
import HomeIcon from "@material-ui/icons/Home";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import TimelineIcon from "@material-ui/icons/Timeline";
import AddIcon from "@material-ui/icons/Add";
import StarIcon from "@material-ui/icons/Stars";
import SettingsIcon from "@material-ui/icons/Settings";
import HelpIcon from "@material-ui/icons/Help";
import FeedbackIcon from "@material-ui/icons/Feedback";
import AccountBalanceIcon from "@material-ui/icons/AccountBalance";
import CreditCardIcon from "@material-ui/icons/CreditCard";

class NavDrawer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loggedIn: false
    };
    this.openAdd = this.openAdd.bind(this);
    this.openProfile = this.openProfile.bind(this);
    this.handleClosing = this.handleClosing.bind(this);
    this.openSend = this.openSend.bind(this);
  }

  handleClosing() {
    this.props.onClose("left", false);
  }

  openAdd() {
    this.props.history.push("/Add");
  }

  openSend() {
    this.props.history.push("/Send");
  }

  openProfile() {
    this.props.history.push("/Leaderboard");
  }

  render() {
    return (
      <div>
        <Drawer open={this.props.open} onClose={this.handleClosing}>
          <div
            tabIndex={0}
            role="button"
            onClick={this.handleClosing}
            onKeyDown={this.handleClosing}
          >
            <div>
              <center>
                <Avatar alt="Profile Image" className="timeline_avatar" />
              </center>

              <ListItem button onClick={this.openProfile}>
                <ListItemIcon>
                  <Avatar className="greenAvatar">
                    <StarIcon />
                  </Avatar>
                </ListItemIcon>

                <ListItemText primary="Leaderboard" />
              </ListItem>

              <ListItem button onClick={this.openSend}>
                <ListItemIcon>
                  <Avatar className="blueAvatar">
                    <TimelineIcon />
                  </Avatar>
                </ListItemIcon>
                <ListItemText primary="Transfer Balance" />
              </ListItem>

              <ListItem button onClick={this.openAdd}>
                <ListItemIcon>
                  <Avatar className="yellowAvatar">
                    <AddIcon />
                  </Avatar>
                </ListItemIcon>
                <ListItemText primary="Donate Money" />
              </ListItem>

              <Divider />
              <Divider />

              <ListItem button>
                <ListItemIcon>
                  <Avatar className="orangeAvatar">
                    <SettingsIcon />
                  </Avatar>
                </ListItemIcon>

                <ListItemText primary="Edit Info" />
              </ListItem>

              <ListItem button>
                <ListItemIcon>
                  <Avatar className="greyAvatar">
                    <HelpIcon />
                  </Avatar>
                </ListItemIcon>

                <ListItemText primary="Help and Support" />
              </ListItem>

              <ListItem button>
                <ListItemIcon>
                  <Avatar className="limeAvatar">
                    <FeedbackIcon />
                  </Avatar>
                </ListItemIcon>
                <ListItemText primary="Feedback" />
              </ListItem>

              <ListItem button>
                <ListItemIcon>
                  <Avatar className="greenAvatar">
                    <CreditCardIcon />
                  </Avatar>
                </ListItemIcon>
                <ListItemText primary="Change Password" />
              </ListItem>
            </div>
          </div>
        </Drawer>
      </div>
    );
  }
}

export default withRouter(NavDrawer);
