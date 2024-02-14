import React, { ReactElement } from 'react';
import { TUrlObject } from '../../@types/index.ts';
import './table.style.css';

type TableProps = {
	urls: TUrlObject[];
};

const Table: React.FC<TableProps> = ({ urls }): ReactElement => {
	return (
		<table className="container table" border={1}>
			<thead>
				<tr>
					<th>Number</th>
					<th>Source Url</th>
					<th>Shortened Url</th>
				</tr>
			</thead>
			<tbody>
				{urls.map((item: TUrlObject, idx: number) => {
					return (
						<tr key={item.id}>
							<td>{idx}</td>
							<td>{item.full}</td>
							<td>{item.short}</td>
						</tr>
					);
				})}
			</tbody>
		</table>
	);
};

export default Table;
