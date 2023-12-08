import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const url = process.env.REACT_APP_API_BASE_URL;

const initialState = {
	globalLoading: false,
	fullWidth: true,
	nea: [],
};

export const fetchNeaOffices = createAsyncThunk(
	"globalSlice/fetchNeaOffices",
	async (neaObj) => {
	  const res = await axios.get(
		`${url}/nea/fetchInstitutions.action?instType=NEA_BRANCH&instNearNeaOffice=${neaObj}`
	  );
	  return res.data.data.result;
	}
  );

export const globalSlice = createSlice({
	name: 'global',
	initialState,
	reducers: {
		handleSidenavFullWidth: (state, action) => {
			state.fullWidth = action.payload
		},
	},
	extraReducers: (builder) => {
		builder

		.addCase(fetchNeaOffices.pending, (state) => {
			state.globalLoading = true;
		})
		.addCase(fetchNeaOffices.fulfilled, (state, action) => {
			state.globalLoading = false;
			if (action?.payload?.length) {
				state.nea = action.payload
			}else{
				state.nea = []
			}
		})
		.addCase(fetchNeaOffices.rejected, (state) => {
			state.globalLoading = false;
		})
	},
});

export default globalSlice.reducer;
export const { handleSidenavFullWidth } = globalSlice.actions;
