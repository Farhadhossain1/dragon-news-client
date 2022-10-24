import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link, useLoaderData } from 'react-router-dom';


const News = () => {
    const news = useLoaderData();
    const {image_url, details, title,category_id } =news;
    return (
        <Card>
        <Card.Img variant="top" src={image_url} />
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text>
            {details}
          </Card.Text>
          <Link to={`/category/${news.category_id}`}>
          <Button variant="primary">All News In This Categories</Button>
          </Link>
        </Card.Body>
      </Card>
    );
};

export default News;