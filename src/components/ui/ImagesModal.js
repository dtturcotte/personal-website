import * as React from 'react'
import Button from '@mui/material/Button'
import Dialog from '@mui/material/Dialog'
import DialogActions from '@mui/material/DialogActions'
import DialogContent from '@mui/material/DialogContent'
import DialogTitle from '@mui/material/DialogTitle'

const ImagesModal = (props) => {
	if (!props.project) {
		return <div></div>
	}
	return (
		<React.Fragment>
			<Dialog fullWidth={true} maxWidth="100%" open={props.isOpen} onClose={props.close} aria-labelledby="alert-dialog-title" aria-describedby="alert-dialog-description">
				<DialogTitle id="alert-dialog-title">{props.project.name}</DialogTitle>
				<DialogContent>
					<div className="modal-images">
						{props.project.images &&
							props.project.images.map((image, i) => {
								return (
									<div key={i}>
										<img src={`../assets/project_images/${props.project.image}/${image.content}/${image.src}.png`} />
										<i style={{ display: 'block', margin: '0 auto', marginTop: '10px' }} className={`fa-solid fa-${image.device}`}></i>
									</div>
								)
							})}
					</div>
				</DialogContent>
				<DialogActions>
					<Button onClick={props.close} autoFocus>
						Close
					</Button>
				</DialogActions>
			</Dialog>
		</React.Fragment>
	)
}

export default ImagesModal
