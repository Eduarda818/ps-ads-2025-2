import React from 'react'
import Typography from '@mui/material/Typography'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Button from '@mui/material/Button'
import FavoriteIcon from '@mui/icons-material/Favorite'

// Fazendo a importação da minha foto
import FotoAutora from '../../assets/FotoAutora.jpeg'

export default function Autora() {
  //  Definindo o estado dos likes lendo localStorage
  const [likes, setLikes] = React.useState(() => {
    const salvou = localStorage.getItem('likes')
    if(salvou) {
      return Number(salvou)
    } else {
      return 0
    }
  })

  // Salva no localStorage quando ocoree a mudança
  React.useEffect(() => {
    localStorage.setItem('likes', likes)
  }, [likes])

  function curtir() {
    setLikes(likes + 1)
  }
  
  // Texto sobre a autora(Eduarda)
  return (
    <div>
      <Typography variant="h1">
        Sobre a Autora:
      </Typography>


      <Card style={{ width: '550px'}}>
        <img 
          src={FotoAutora} 
          style={{ 
            width: '550px',
            height: '500px'
          }} 
        />

        <CardContent>
          <Typography variant="h5">
           Eduarda Marve Palhares Fernandes
          </Typography>

          <Typography variant="body2" style={{ marginTop: '15px' }}>
          Tenho 20 anos e sou estudante de Análise e Desenvolvimento de 
            Sistemas na Faculdade de Técnologia de Franca(Fatec), ao final desse ano irei concluir meu 4smestre.
            Pretendo crescer profissionalmente na área de tecnologia.
          </Typography>
        </CardContent>

        <div>
          <Button 
            startIcon={<FavoriteIcon />}
            onClick={curtir}
            style={{ 
              backgroundColor: '#ff0059ff', 
              color: 'white' 
            }}
          >
            Curtir ({likes})
          </Button>
        </div>
      </Card>
    </div>
  )
}