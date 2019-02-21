import React, { useState, useEffect } from 'react';
import _ from 'lodash';
import moment from 'moment';
import { Segment, Header, Table } from 'semantic-ui-react';
import { fetchUserContent } from '../utils';

const Items = ({ token, username }) => {
  // state
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [items, setItems] = useState([]);

  // functions
  const getContent = async () => {
    try {
      const content = await fetchUserContent(token, username);
      console.log(content);
      setItems(content.items);
      setLoading(false);
    } catch (error) {
      setError(false);
      setLoading(false);
    }
  };

  // lifecycle
  useEffect(() => {
    getContent();
  }, []);

  // render
  if (loading) {
    return <div>Fetching your content...</div>;
  }

  if (error) {
    return <div>Error fetching your content...</div>;
  }

  return (
    <Segment style={{ marginTop: '1rem' }}>
      <Header as="h4" content={`Hi, ${username}! Here are your AGOL items.`} />
      <Table celled>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>Title</Table.HeaderCell>
            <Table.HeaderCell>Access</Table.HeaderCell>
            <Table.HeaderCell>Type</Table.HeaderCell>
            <Table.HeaderCell>Created</Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          {_.map(items, i => {
            return (
              <Table.Row key={i.id}>
                <Table.Cell>{i.title}</Table.Cell>
                <Table.Cell>{i.access}</Table.Cell>
                <Table.Cell>{i.type}</Table.Cell>
                <Table.Cell>
                  {moment(i.created).format('MM/DD/YYYY h:mm:ss A')}
                </Table.Cell>
              </Table.Row>
            );
          })}
        </Table.Body>
      </Table>
    </Segment>
  );
};

export default Items;
