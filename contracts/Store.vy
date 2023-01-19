 #@version ^0.3.0

nb:uint256

@external
def store(newNb : uint256) :
    self.nb=newNb

@external
@view
def getNb() -> uint256 :
    return self.nb
