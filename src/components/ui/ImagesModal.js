import * as React from 'react'
import Button from '@mui/material/Button'
import Dialog from '@mui/material/Dialog'
import DialogActions from '@mui/material/DialogActions'
import DialogContent from '@mui/material/DialogContent'
import DialogTitle from '@mui/material/DialogTitle'

const ImagesModal = (props) => {
	if (!props.item) {
		return <div></div>
	}
	return (
		<React.Fragment>
			<Dialog fullWidth={true} maxWidth="100%" open={props.isOpen} onClose={props.close} aria-labelledby="alert-dialog-title" aria-describedby="alert-dialog-description">
				<DialogTitle id="alert-dialog-title">
					{props.item.name} {props.item.description1 && `— ${props.item.description1}`}
				</DialogTitle>
				<DialogContent>
					<div className="modal-images">
						{props.type === 'artwork' && (
							<div className="tile-modal-image">
								<img src={`../assets/tiles/images/artwork/${props.item.image}.png`} />
							</div>
						)}
						{props.type === 'projects' &&
							props.item.images &&
							props.item.images.map((image, i) => {
								return (
									<div className="project-modal-image" key={i}>
										<img src={`../assets/projects/images/${props.item.image}/${image.content}/${image.src}.png`} />
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
