
# @version ^0.3.0

@external
@payable
def __default__():
    pass

@external
def sendEther(to:address,amount:uint256):
    send(to,amount)

@external
def sendAll(to:address):
    send(to,self.balance)

@external
def balanceOf() -> uint256:
    return self.balance

