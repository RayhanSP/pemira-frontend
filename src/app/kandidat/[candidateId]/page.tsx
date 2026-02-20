import { Box, Typography } from '@mui/material'
import { CustomButton as Button } from '@/modules/common/components/Button'
import { PreviousNavigator } from '@/modules/common/components/PreviousNavigator'
import { Download, Link as LinkIcon } from '@mui/icons-material'
import { Disclosure } from '@/modules/common/components/Disclosure'
import { getCandidateDetail } from '@/modules/candidate/actions/getCandidateDetail'

export default async function CandidateDetailPage({
  params,
}: {
  params: Promise<{ candidateId: string }>
}) {
  const { candidateId } = await params
  const candidate = await getCandidateDetail(candidateId)

  return (
    <Box
      component={'div'}
      sx={{
        backgroundColor: 'white',
        width: '100%',
        paddingTop: '6rem',
        paddingBottom: '1rem',
        display: 'flex',
        justifyContent: 'center',
        minHeight: '100vh',
        paddingX: '1rem',
      }}
    >
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          width: '100%',
          maxWidth: '1024px',
          gap: 1,
        }}
      >
        <Box
          sx={{
            width: '100%',
          }}
        >
          <PreviousNavigator />
        </Box>
        <Box
          sx={{
            display: 'flex',
            width: '100%',
            gap: 4,
            flexDirection: { xs: 'column', md: 'row' },
          }}
        >
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              width: { md: '35%', xs: '100%' },
              gap: '14px',
            }}
          >
            <Box
              sx={{
                backgroundColor: 'rgba(44, 132, 160, 0.3)',
                padding: 2,
                borderRadius: '8px',
              }}
            >
              <Typography
                fontWeight={700}
                sx={{
                  color: '#585858',
                  display: 'flex',
                  justifyContent: 'center',
                }}
              >
                Paslon No.{candidate.content.election_number}
              </Typography>
            </Box>
            <Box
              sx={{
                backgroundColor: '#CBBC47',
                borderRadius: '8px',
                display: 'flex',
                flexDirection: 'column',
                padding: '10px',
              }}
            >
              <Box
                component="img"
                sx={{
                  height: { md: 300, xs: 400 },
                  borderRadius: '8px',
                  width: '100%',
                  maxHeight: { xs: 500, md: 350 },
                  maxWidth: { xs: 'full', md: 'full' },
                  display: 'flex',
                  justifyContent: 'center',
                  flexDirection: 'column',
                  aspectRatio: '1/1',
                }}
                alt={candidate.content.name}
                src={candidate.content.candidate_pair_photo}
              />

              <Box
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '8px',
                  padding: '12px',
                }}
              >
                <Box
                  component={'div'}
                  sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                  }}
                >
                  <Typography
                    sx={{
                      display: 'flex',
                      fontWeight: 700,
                      gap: '4px',
                    }}
                  >
                    {candidate.content.president.split(' ')[0]}
                    <Typography
                      sx={{
                        display: 'flex',
                        fontWeight: 400,
                      }}
                    >
                      (Calon Ketua)
                    </Typography>
                  </Typography>
                  <Typography
                    sx={{
                      display: 'flex',
                      fontWeight: 700,
                      gap: '4px',
                    }}
                  >
                    {candidate.content.vice_president.split(' ')[0]}
                    <Typography
                      sx={{
                        display: 'flex',
                        fontWeight: 400,
                      }}
                    >
                      (Calon Wakil Ketua)
                    </Typography>
                  </Typography>
                </Box>
                <Box
                  sx={{
                    height: '2px',
                    display: 'flex',
                    justifyContent: 'center',
                  }}
                >
                  <Box
                    sx={{
                      height: '2px',
                      width: '80%',
                      display: 'flex',
                      justifyContent: 'center',
                      backgroundColor: '#0B3F78',
                    }}
                  ></Box>
                </Box>
                <Typography
                  sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    color: '#585858',
                  }}
                >
                  {candidate.content.tagline}
                </Typography>
              </Box>
            </Box>
            <a
              href={candidate.content.document_url}
              target={'_blank'}
              rel="noreferrer"
              style={{
                textDecoration: 'none',
              }}
            >
              <Button size="block" startIcon={<Download />}>
                Unduh Booklet
              </Button>
            </a>
            <a
              href={candidate.content.social_media}
              target={'_blank'}
              rel="noreferrer"
              style={{
                textDecoration: 'none',
              }}
            >
              <Button size="block" startIcon={<LinkIcon />}>
                Social Media
              </Button>
            </a>
          </Box>
          <Box
            sx={{
              width: { md: '65%', xs: '100%' },
              display: 'flex',
              flexDirection: 'column',
              gap: '24px',
            }}
          >
            {candidate.content ? (
              <Disclosure isOpen title="Visi">
                <Box sx={{ padding: '0px 12px' }}>
                  {candidate.content.vision}
                </Box>
              </Disclosure>
            ) : null}
            {candidate.content ? (
              <Disclosure isOpen title="Misi">
                <Box
                  sx={{
                    padding: '0px 24px',
                  }}
                >
                  <ul>
                    {candidate.content.mission.map((mission, index) => (
                      <li key={index}>{mission}</li>
                    ))}
                  </ul>
                </Box>
              </Disclosure>
            ) : null}
          </Box>
        </Box>
      </Box>
    </Box>
  )
}
