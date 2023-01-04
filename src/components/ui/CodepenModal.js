import * as React from 'react'
import Button from '@mui/material/Button'
import Dialog from '@mui/material/Dialog'
import DialogActions from '@mui/material/DialogActions'
import DialogContent from '@mui/material/DialogContent'
import DialogTitle from '@mui/material/DialogTitle'

const CodepenModal = (props) => {
	if (!props.item) {
		return <div></div>
	}
	return (
		<React.Fragment>
			<Dialog fullWidth={true} maxWidth="100%" open={props.isOpen} onClose={props.close} aria-labelledby="alert-dialog-title" aria-describedby="alert-dialog-description">
				<DialogTitle id="alert-dialog-title">{props.item.name}</DialogTitle>
				<DialogContent>
					{props.item.codepenHashes &&
						props.item.codepenHashes.length > 0 &&
						props.item.codepenHashes.map((codepenHash, index) => {
							return (
								<div className="codepen" key={index}>
									<iframe
										height="700"
										style={{ width: '100%' }}
										scrolling="no"
										title="BFS DFS"
										src={`https://codepen.io/dtturcotte/embed/${codepenHash}?default-tab=result`}
										frameBorder="no"
										loading="lazy"
										allowtransparency="true"
										allowFullScreen={true}
										fullscreen="true"
									>
										See the Pen <a href={`https://codepen.io/dtturcotte/pen/${codepenHash}`}>BFS DFS</a> by Daniel Turcotte (<a href="https://codepen.io/dtturcotte">@dtturcotte</a>
										) on <a href="https://codepen.io">CodePen</a>.
									</iframe>
								</div>
							)
						})}
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

export default CodepenModal
