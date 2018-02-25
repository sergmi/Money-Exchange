module.exports = function makeExchange(currency) {
	let obj = {};
	if(currency>10000){return {error: "You are rich, my friend! We don't have so much coins for exchange"};}	
	if(!currency){return obj;}		
	else {if(currency/50 >= 1){obj['H'] = Math.floor(currency/50);}
			if(currency%50 === 0){return obj;}
			else {if(currency%50/25 >= 1){obj['Q'] = Math.floor(currency%50/25);}
				if(currency%50%25 === 0){return obj;}
				else {if(currency%50%25/10 >= 1){obj['D'] = Math.floor(currency%50%25/10);}
					if(currency%50%25%10 === 0){return obj;}
					else {if(currency%50%25%10/5 >= 1){obj['N'] = Math.floor(currency%50%25%10/5);}
						if(currency%50%25%10%5 === 0){return obj;}
						else {if(currency%50%25%10%5/1 >= 1){obj['P'] = Math.floor(currency%50%25%10%5/1);}
							{return obj;}
						}
					}				
				}
			}	
	}  
}