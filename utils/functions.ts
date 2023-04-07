import moment from 'moment'
export const formatDate = (date:string | undefined) => {
	return moment(date).format("YYYY/MM/DD");
}
export const deleteObjectEmptyProperties = (object:any) => {
	return Object.fromEntries(
		Object.entries(object).filter(([key, value]) => value !== "")
	  );
}
export const getUrlStringFromObject = (object:any) => {
	return Object.entries(object).reduce(
		(accumulator, currentValue, index) => {
		  if (index === Object.entries(object).length - 1)
			return `${accumulator}${currentValue[0]}=${currentValue[1]}`;
		  else return `${accumulator}${currentValue[0]}=${currentValue[1]}&`;
		},
		""
	  );
}