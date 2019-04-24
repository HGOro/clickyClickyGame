import React from 'react'
import ImgBtn from '../ImgBtn/ImgBtn'
import logo from '../../logo.svg'

const imgUrls = [
    {id: 'A', url: 'http://www.stickpng.com/assets/thumbs/5a0c40785a997e1c2cea1168.png'},
    {id: 'B', url: 'https://stickeroid.com/uploads/pic/full/thumb/stickeroid_5bf55749d5cc2.png'}
]

const ImgBtnWrapper = props => {
    console.log(props.clickHandler)
    const imageArray = 
    return (
        <div>
            {imgUrls.map( (imgUrl, index)=>
                <ImgBtn
                    key={imgUrl.id}
                    imgUrl={imgUrl.url}
                    clickHandler={() => props.clickHandler(imgUrl.id)}
                />
            )}
        </div>
    )
}


//  render(){
//    return (
//        <div>
//          <Navbar />
//          <Container >
//            <CardColumns>
//              {this.state.characters.map(character => (
//                <Card className="card" key={character.id} onClick={(event)=>this.handleCardClick(event, character.id)}> 
//                  <img src={`/assets/img/${character.image}`} alt={character.name} className="character"/>
//                </Card>
//              ))}
//            </CardColumns>
//          </Container>
//        </div>
//      );
//  }

export default ImgBtnWrapper