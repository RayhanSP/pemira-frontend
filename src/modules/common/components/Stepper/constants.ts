import { TimelineInterface } from './interfaces'

export const TIMELINE: TimelineInterface[] = [
  {
    event: 'Pendaftaran Paslon',
    description: '12 Februari 2025 - 17 Februari 2025',
    date: new Date('2024-02-17'),
  },
  {
    event: 'Hasil Verifikasi',
    description: '5 Maret 2025',
    date: new Date('2025-03-05'),
  },
  {
    event: 'Masa Kampanye',
    description: '5 Maret 2025 - 10 Maret 2025',
    date: new Date('2025-03-10'),
  },
  {
    event: 'Masa Tenang',
    description: '17 Maret 2025',
    date: new Date('2025-03-17'),
  },
  {
    event: 'Pemungutan Suara',
    description: '18 Maret 2025 - 20 Maret 2025',
    date: new Date('2025-03-20'),
  },
  {
    event: 'Pengumuman Hasil',
    description: '21 Maret 2025',
    date: new Date('2025-03-21'),
  },
]

export const STEPPER_ELEMENT_STYLE = {
  '& .MuiStepLabel-root .Mui-completed': {
    color: '#F8A932',
  },
  '& .MuiStepLabel-label.Mui-completed': {
    color: '#F8A932',
  },

  '& .MuiSvgIcon-root.Mui-completed': {
    cursor: 'pointer',
    borderWidth: 0,
  },

  '& .MuiStepLabel-root .Mui-completed .MuiStepIcon-text': {
    fill: '#F8A932',
    fontWeight: 'bold',
    opacity: 0,
  },

  '& .MuiStepLabel-root .Mui-active': {
    color: '#061A30',
  },

  '& .MuiSvgIcon-root.Mui-active': {
    borderColor: '#FFE394',
    cursor: 'pointer',
  },

  '& .MuiStepLabel-label.Mui-active': {
    color: '#FFE394',
    fontWeight: '700',
  },

  '& .MuiStepLabel-label.Mui-active.MuiStepLabel-alternativeLabel': {
    color: 'black',
  },

  '& .MuiStepLabel-root .Mui-active .MuiStepIcon-text': {
    fill: '#FFE394',
    fontWeight: '700',
  },

  '& .MuiSvgIcon-root': {
    cursor: 'pointer',
    color: '#061A30',
    border: 2,
    borderColor: 'white',
    borderRadius: '50%',
  },

  '& .MuiStepLabel-root .Mui-disabled': {
    color: '#061A30',
  },
  '& .MuiStepLabel-label.Mui-disabled': {
    color: '#FFFFFF',
  },

  '& .MuiStepConnector-line': {
    borderTopWidth: 2,
  },
  '& .MuiStepConnector-root.Mui-active .MuiStepConnector-line': {
    borderColor: '#FFCF48',
  },
  '& .MuiStepConnector-root.Mui-completed .MuiStepConnector-line': {
    borderColor: '#FFCF48;',
  },
  '& .MuiStepConnector-root.Mui-disabled .MuiStepConnector-line': {
    borderColor: '#F4F4F4',
  },
}

export const STEPPER_ELEMENT_STYLE_WITHOUT_INDEX = {
  '& .MuiStepLabel-root .Mui-completed': {
    color: '#F8A932',
  },
  '& .MuiStepLabel-label.Mui-completed': {
    color: '#F8A932',
  },

  '& .MuiSvgIcon-root.Mui-completed': {
    cursor: 'pointer',
    borderWidth: 0,
    background: '#F8A932',
  },

  '& .MuiStepLabel-root .Mui-active': {
    color: '#061A30',
  },

  '& .MuiSvgIcon-root.Mui-active': {
    borderColor: '#FFE394',
    cursor: 'pointer',
  },

  '& .MuiStepLabel-label.Mui-active': {
    color: '#FFE394',
    fontWeight: 'bold',
  },

  '& .MuiStepLabel-label.Mui-active.MuiStepLabel-alternativeLabel': {
    color: 'black',
  },

  '& .MuiStepLabel-root .Mui-active .MuiStepIcon-text': {
    fill: '#FFE394',
    fontWeight: 'bold',
    opacity: 0,
  },

  '& .MuiSvgIcon-root': {
    cursor: 'pointer',
    color: '#061A30',
    border: 2,
    borderColor: 'white',
    borderRadius: '50%',
    display: 'flex',
  },

  '& .MuiStepLabel-root .Mui-disabled': {
    color: '#061A30',
  },

  '& .MuiStepLabel-label.Mui-disabled': {
    color: '#FFFFFF',
  },

  '& .MuiStepLabel-root .Mui-disabled .MuiStepIcon-text': {
    opacity: 0,
  },

  '& .MuiStepConnector-line': {
    borderTopWidth: 2,
  },
  '& .MuiStepConnector-root.Mui-active .MuiStepConnector-line': {
    borderColor: '#F4F4F4',
  },
  '& .MuiStepConnector-root.Mui-completed .MuiStepConnector-line': {
    borderColor: '#FFCF48',
  },
  '& .MuiStepConnector-root.Mui-disabled .MuiStepConnector-line': {
    borderColor: '#F4F4F4',
  },
}

export const STEPPER_CONTENT_STYLE = {
  background: 'linear-gradient(180deg, #2A8BF4 0%, #1061AF 100%)',
  paddingX: '0.5em',
  paddingY: '0.1em',
  textAlign: 'center',
  borderRadius: '3px',
}
