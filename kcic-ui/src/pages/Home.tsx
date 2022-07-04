import {
  Card, CardTitle, CardBody,
} from 'reactstrap';
import './Home.css';

function Home() {
  return (
    <div>
      <section>
        <h1>KCIC Recruiting Challenge</h1>
        <br />
        <Card>
          <CardBody>
            <CardTitle tag="h5">
              Tasks
            </CardTitle>
            <ul>
              <li><p>Protect the Approval Queue route from unauthenticated users, showing an error page when the route is accessed explicitly: create an error page, and present a 404</p></li>

              <li><p>Implement the ability to review claims in the queue (i.e. accept/reject with a reason provided)</p></li>

              <li><p>Add a status column to the Queue to display the status of each claim.</p></li>

              <li><p>{`Order the queue such that un-reviewed claims (those with "Pending" status) appear at the top of the queue; the rest of the queue should be sorted in ascending order.`}</p></li>
            </ul>

          </CardBody>
        </Card>
      </section>

    </div>
  );
}

export default Home;
