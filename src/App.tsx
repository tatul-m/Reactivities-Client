import axios from 'axios';
import { useEffect, useState } from 'react';
import { Header, List, ListItem } from 'semantic-ui-react';
import './App.css';

function App() {
  const [activities, setActivities] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5017/api/Activities').then((response) => {
      setActivities(response.data);
    });
  }, [activities]);

  return (
    <div>
      <Header as="h2" icon="users" content="Reactivities" />
      <List>
        {activities.map((activity: any) => (
          <ListItem key={activity.id}>{activity.title}</ListItem>
        ))}
      </List>
    </div>
  );
}

export default App;
