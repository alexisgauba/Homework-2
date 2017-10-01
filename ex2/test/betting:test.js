var BettingContract = artifacts.require("./BettingContract.sol");

contract('BettingContract', function(accounts){

	const oracle = accounts[0];
	const gamblerA = accounts[1];
	const gamblerB = accounts[2];

	it("should set the address of the oracle to the address passed in", function(){
		return BettingContract.deployed().then(function(instance){
			return instance.chooseOracle.call(oracle);
		});
	});
});

	/**
	it("should check that the checkOutcomes function checks the outcomes", function(){
		return BettingContract.deployed().then(function(instance){
			assert.equal(checkOutcomes(), testOutcomes)
		});
	});

	it("should allow gambler A to make their bet", function(){
		return BettingContract.deployed().then(function(instance){
			return instance.makeBet(1, {value: 50}).call(gamblerA);
		});
	});	

	it("should allow gambler B to make their bet", function(){
		return BettingContract.deployed().then(function(instance){
			return instance.makeBet(1, {value: 50}).call(gamblerB);
		});
	});
});
**/