import React from 'react'
import { Card, Icon, Image, Grid } from 'semantic-ui-react'
import pierre from '../images/pierre.jpg'
import janko from '../images/janko.gif'
import blake from '../images/blake.jpeg'
import robin from '../images/robin.png'
import carlos from '../images/carlos.jpg'
import Team from '../images/team.jpg'

const Contacts = () => {
  return (

    <Grid columns='equal'>
      <Grid.Row>
        <Grid.Column>
          <Card id="team-card">
            <Image  src={pierre} alt = "nopic"/>
            <Card.Content >
              <Card.Header>Pierre</Card.Header>
              <Card.Meta>
                <span className='date'>bon ton Coding</span>
              </Card.Meta>
              <Card.Description>
    </Card.Description>
            </Card.Content>
            <Card.Content extra>
              <a href="https://github.com/pierre-1">
                <Icon name='github' />
     Check my github
    </a>
            </Card.Content>
          </Card>
        </Grid.Column>

        <Grid.Column>
          <Card id="team-card">
            <Image src={janko} alt = "nopic" wrapped ui={false} />
            <Card.Content >
              <Card.Header>Janko</Card.Header>
              <Card.Meta>
                <span className='date'>Joined in 2015</span>
              </Card.Meta>
              <Card.Description>
                Backend Husstler
</Card.Description>
            </Card.Content>
            <Card.Content extra>
              <a href="https://github.com/MadFarmer101">
                <Icon name='github' />
Check my github
</a>
            </Card.Content>
          </Card>
        </Grid.Column>

        <Grid.Column>
          <Card id="team-card">
          <Image src={blake} alt = "nopic" wrapped ui={false} />
            <Card.Content >
              <Card.Header>Blake</Card.Header>
              <Card.Meta>
                <span className='date'>Joined in 2015</span>
              </Card.Meta>
              <Card.Description>
                STYLE.
</Card.Description>
            </Card.Content>
            <Card.Content extra>
              <a href="https://github.com/blake-futchi">
                <Icon name='github' />
Check my github
</a>
            </Card.Content>
          </Card>
        </Grid.Column>

        <Grid.Column>
          <Card id="team-card">
          <Image src={robin} alt = "nopic" wrapped ui={false} />
            <Card.Content >
              <Card.Header>Robin</Card.Header>
              <Card.Meta>
                <span className='date'>Joined in 2015</span>
              </Card.Meta>
              <Card.Description>
               The front end magician.
</Card.Description>
            </Card.Content>
            <Card.Content extra>
              <a href="https://github.com/robin-lillqvist">
                <Icon name='github' />
Check my github
</a>
            </Card.Content>
          </Card>
        </Grid.Column>

        <Grid.Column>
          <Card id="team-card">
          <Image src={carlos} alt = "nopic" wrapped ui={false} />
            <Card.Content >
              <Card.Header>Carlos</Card.Header>
              <Card.Meta>
                <span className='date'>Joined in 2015</span>
              </Card.Meta>
              <Card.Description>
               
</Card.Description>
            </Card.Content>
            <Card.Content extra>
              <a href="https://github.com/Carltesio">
                <Icon name='github' />
Check my github
</a>
            </Card.Content>
          </Card>
        </Grid.Column>

        <Grid.Column>
          <Card id="team-card">
            <Image src='https://react.semantic-ui.com/images/avatar/large/matthew.png' wrapped ui={false} />
            <Card.Content >
              <Card.Header>Jaime</Card.Header>
              <Card.Meta>
                <span className='date'>Joined in 2015</span>
              </Card.Meta>
              <Card.Description>
               The coach
</Card.Description>
            </Card.Content>
            <Card.Content extra>
              <a href="https://github.com/JaimeCrz">
                <Icon name='github' />
Check my github
</a>
            </Card.Content>
          </Card>
        </Grid.Column>

      </Grid.Row>
    </Grid>


  )
}

export default Contacts

