import { Box, Typography, Button } from "@mui/material";
import LoadingImage from '../assets/loading.png';

const ResultBox = ({loading, resultVisible, field, time, onModalOpen, onShare}) => {
  const calculatedDays = time ? Math.ceil(10000 / Number(time)) : 0;

  return(
    <>
      {loading && (
        <Box sx={{display:'flex', justifyContent: 'center', mb: 8}}>
          <img src={LoadingImage} alt="loading" style={{
            animation: 'rotate 1.1s infinite linear',
            width: 100,
          }}/>
        </Box>
      )}
      {!loading && (
        <Box sx={{  display: 'flex', flexDirection: 'column', justifyContent: 'center', mb: 8, textAlign: 'center' }}>
          <Typography variant="h6">
            당신은 <strong style={}>{field}</strong> 전문가가 되기 위해서
          </Typography>
          <Typography variant="h6">
            대략 <strong>{time}</strong> 일 이상 훈련하셔야 됩니다.
          </Typography>
        </Box>
      )}

    </>
  );
}

export default ResultBox;